"use client";

import { useEffect, useId, useRef } from "react";

export function ConfirmationDialog({ open, message, onCancel, onConfirm, disabled }: {
  open: boolean;
  message: string;
  onCancel: () => void;
  onConfirm: () => void;
  disabled: boolean;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const descriptionId = useId();

  useEffect(() => {
    const element = dialog.current;
    if (open && !element?.open) element?.showModal();
    if (!open && element?.open) element.close();
  }, [open]);

  return (
    <dialog
      ref={dialog}
      aria-label="Änderung bestätigen"
      aria-describedby={descriptionId}
      onCancel={(event) => { event.preventDefault(); onCancel(); }}
      className="confirmation-dialog m-auto w-[calc(100%_-_3rem)] max-w-sm rounded-2xl border-0 bg-white p-6 text-textGrey shadow-xl"
    >
      <p id={descriptionId} className="text-sm">{message}</p>
      <div className="mt-6 flex items-center justify-end gap-3">
        <button autoFocus type="button" onClick={onCancel} className="rounded-full border border-practiceGrey/40 px-4 py-2 text-xs font-medium text-textGrey transition hover:border-practiceGrey hover:bg-practiceGrey/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-practiceRed">
          Abbrechen
        </button>
        <button type="button" onClick={onConfirm} disabled={disabled} className="rounded-full bg-practiceRed px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-practiceRed/30 transition hover:bg-practiceRed/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-practiceRed disabled:opacity-60">
          Bestätigen
        </button>
      </div>
    </dialog>
  );
}
