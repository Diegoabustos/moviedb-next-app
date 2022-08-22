type PillProps = {
    text: string;
    clasName?: string;
};

const Pill = ({text, clasName}: PillProps) => (
    <div className={`bg-cyan-800 text-white text-sm font-bold px-2 py-1 m-2 rounded-full inline-block ${clasName}`}>
        {text}
    </div>
);

export default Pill;