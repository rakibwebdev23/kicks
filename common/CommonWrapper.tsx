export default function CommonWrapper({ children }: { children: React.ReactNode }) {
    return (
        <div className="max-w-[1320px] mx-auto px-4 md:px-2">
            {children}
        </div>
    )
}