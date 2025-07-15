

export function RoundedFrame(props: { title: string, children?: React.ReactNode }) {
    return (
        <div className="rounded-2xl bg-practiceRed overflow-hidden shadow-lg items-center flex flex-col">
            <div className="text-white text-xl font-bold text-center p-2">
                {props.title}
            </div>
            <div className="rounded-t-2xl bg-backgroundLightGray p-4 w-full h-full overflow-hidden min-h-40 justify-center items-center flex">
                {props.children}
            </div>
        </div>

        
    );
}