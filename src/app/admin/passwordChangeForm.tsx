"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import EyeIcon from "@/icons/eye.svg";
import EyeOffIcon from "@/icons/eye-off.svg";
import { sessionFetch } from "../common/authentication/sessionFetch";
import { Button } from "../common/button/button";

type Field = "old_password" | "new_password1" | "new_password2";
type Errors = Partial<Record<Field, string[]>>;
const fields: { name: Field; label: string; autoComplete: string }[] = [
  { name: "old_password", label: "Aktuelles Passwort", autoComplete: "current-password" },
  { name: "new_password1", label: "Neues Passwort", autoComplete: "new-password" },
  { name: "new_password2", label: "Neues Passwort wiederholen", autoComplete: "new-password" },
];

export function PasswordChangeForm() {
  const [values, setValues] = useState({ old_password: "", new_password1: "", new_password2: "" });
  const [visibleFields, setVisibleFields] = useState<Partial<Record<Field, boolean>>>({});
  const [errors, setErrors] = useState<Errors>({});
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const router = useRouter();

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (isSaving) return;
    setErrors({});
    setError("");
    setSuccess(false);
    if (values.new_password1 !== values.new_password2) {
      setErrors({ new_password2: ["Die neuen Passwörter stimmen nicht überein."] });
      return;
    }
    setIsSaving(true);
    try {
      const response = await sessionFetch("/api/auth/password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (response.status === 401) {
        router.push("/admin/login");
        return;
      }
      const data = await response.json();
      if (!response.ok) {
        if (data.errors) {
          const fieldErrors: Errors = {};
          for (const { name } of fields) {
            if (Array.isArray(data.errors[name])) {
              fieldErrors[name] = data.errors[name].map((item: { message: string }) => item.message);
            }
          }
          setErrors(fieldErrors);
        } else {
          setError("Das Passwort konnte nicht geändert werden. Bitte versuchen Sie es erneut.");
        }
        return;
      }
      setValues({ old_password: "", new_password1: "", new_password2: "" });
      setVisibleFields({});
      setSuccess(true);
    } catch {
      setError("Keine Verbindung zum Server. Bitte versuchen Sie es erneut.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <section id="password-settings" aria-labelledby="password-heading" className="w-full max-w-xl rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5 sm:p-8">
      <h1 id="password-heading" className="text-2xl font-light text-textBlue">Passwort ändern</h1>
      <p className="mt-2 text-sm text-textGrey">Verwenden Sie mindestens 8 Zeichen und kein häufig verwendetes Passwort.</p>
      <form onSubmit={submit} aria-busy={isSaving} className="mt-5 space-y-4">
        {fields.map(({ name, label, autoComplete }) => (
          <div key={name} className="space-y-1.5">
            <label htmlFor={`change-${name}`} className="block text-sm font-medium text-textGrey">{label}</label>
            <div className="relative">
              <input
                id={`change-${name}`}
                name={name}
                type={visibleFields[name] ? "text" : "password"}
                autoComplete={autoComplete}
                required
                maxLength={1024}
                disabled={isSaving}
                value={values[name]}
                onChange={(event) => {
                  setValues((current) => ({ ...current, [name]: event.target.value }));
                  setSuccess(false);
                }}
                aria-invalid={Boolean(errors[name]?.length)}
                aria-describedby={errors[name]?.length ? `error-${name}` : undefined}
                className="w-full rounded-2xl border border-practiceGrey/30 bg-white py-3 pl-4 pr-14 text-base text-textGrey outline-none focus:border-practiceRed focus:ring-2 focus:ring-practiceRed/20"
              />
              <button
                type="button"
                disabled={isSaving}
                onClick={() => setVisibleFields((current) => ({ ...current, [name]: !current[name] }))}
                aria-label={`${label}: ${visibleFields[name] ? "verbergen" : "anzeigen"}`}
                aria-controls={`change-${name}`}
                title={visibleFields[name] ? "Passwort verbergen" : "Passwort anzeigen"}
                className="absolute inset-y-1 right-1 flex w-11 items-center justify-center rounded-xl text-textGrey/60 transition hover:bg-practiceGrey/10 hover:text-textBlue focus-visible:outline focus-visible:outline-2 focus-visible:outline-practiceRed disabled:opacity-60"
              >
                {visibleFields[name] ? (
                  <EyeOffIcon className="h-5 w-5" aria-hidden="true" />
                ) : (
                  <EyeIcon className="h-5 w-5" aria-hidden="true" />
                )}
              </button>
            </div>
            {errors[name]?.length ? <p id={`error-${name}`} role="alert" className="text-sm text-red-700">{errors[name]?.join(" ")}</p> : null}
          </div>
        ))}
        {error && <p role="alert" className="text-sm text-red-700">{error}</p>}
        {success && <p role="status" className="text-sm text-green-800">Passwort geändert. Sie bleiben hier angemeldet; andere Sitzungen wurden abgemeldet.</p>}
        <div className="flex flex-wrap items-center gap-4 pt-4">
          <Button type="submit" disabled={isSaving} className="text-sm">
            <span role="status" aria-live="polite">{isSaving ? "Wird gespeichert…" : "Passwort speichern"}</span>
          </Button>

        </div>
      </form>
    </section>
  );
}
