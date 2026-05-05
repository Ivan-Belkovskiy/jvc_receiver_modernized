
export default function SecondarySegment({ color, offset = 0, data = "", isCenterPosition }: { color?: string, offset?: number, data?: string[] | string, isCenterPosition?: boolean }) {

    let segments: Record<string, string[]> = {
        "1": ["0", "2", "3", "5", "6", "7", "8", "9", "A", "F", "C", "S", "line_top"],
        "2": ["0", "2", "3", "5", "6", "7", "8", "9", "A", "F", "C", "S", "line_top"],
        "3": ["0", "2", "3", "5", "6", "7", "8", "9", "A", "F", "C", "S", "line_top"],
        "4": ["0", "2", "3", "5", "6", "7", "8", "9", "A", "F", "C", "S", "line_top"],

        "5": ["2", "3", "4", "5", "6", "8", "-", "9", "A", "F", "D", "d", "B", "b", "line_middle"],
        "6": ["2", "3", "4", "5", "6", "8", "-", "9", "A", "F", "D", "d", "B", "b", "line_middle"],
        "7": ["2", "3", "4", "5", "6", "8", "-", "9", "A", "F", "D", "d", "S", "B", "b", "line_middle"],
        "8": ["2", "3", "4", "5", "6", "8", "-", "9", "A", "F", "D", "d", "S", "B", "b", "line_middle"],

        "9": ["0", "2", "3", "5", "6", "8", "9", "C", "D", "d", "U", "S", "B", "b", "L", "line_bottom"],
        "10": ["0", "2", "3", "5", "6", "8", "9", "C", "D", "d", "U", "S", "B", "b", "L", "line_bottom"],
        "11": ["0", "2", "3", "5", "6", "8", "9", "C", "D", "d", "U", "S", "B", "b", "L", "line_bottom"],
        "12": ["0", "2", "3", "5", "6", "8", "9", "C", "D", "d", "U", "S", "B", "b", "L", "line_bottom"],


        "13": ["0", "4", "5", "6", "8", "9", "A", "M", "F", "C", "U", "B", "b", "L", "line_top_left"],
        "14": ["0", "4", "5", "6", "8", "9", "A", "M", "F", "C", "U", "B", "b", "L", "line_top_left"],
        "15": ["0", "4", "5", "6", "8", "9", "A", "M", "F", "C", "U", "B", "b", "L", "line_top_left"],

        "16": ["0", "2", "6", "8", "A", "M", "F", "C", "D", "d", "U", "B", "b", "L", "line_bottom_left"],
        "17": ["0", "2", "6", "8", "A", "M", "F", "C", "D", "d", "U", "B", "b", "L", "line_bottom_left"],
        "18": ["0", "2", "6", "8", "A", "M", "F", "C", "D", "d", "U", "B", "b", "L", "line_bottom_left"],

        "19": ["0", "1", "2", "3", "4", "7", "8", "9", "A", "M", "D", "d", "U", "line_top_right"],
        "20": ["0", "1", "2", "3", "4", "7", "8", "9", "A", "M", "D", "d", "U", "line_top_right"],
        "21": ["0", "1", "2", "3", "4", "7", "8", "9", "A", "M", "D", "d", "U", "line_top_right"],

        "22": ["0", "1", "3", "4", "5", "6", "7", "8", "9", "A", "M", "D", "d", "U", "S", "B", "b", "line_bottom_right"],
        "23": ["0", "1", "3", "4", "5", "6", "7", "8", "9", "A", "M", "D", "d", "U", "S", "B", "b", "line_bottom_right"],
        "24": ["0", "1", "3", "4", "5", "6", "7", "8", "9", "A", "M", "D", "d", "U", "S", "B", "b", "line_bottom_right"],


        "25": ["M", "S"],
        "26": ["M", "S"],
        "27": ["M", "S"],

        "28": ["M"],
        "29": ["M"],
        "30": ["M"],
    };

    const fillForSegment = (num: number) => {
        if (typeof data === 'string') return (segments[num]?.includes(data)) ? '#fff' : '';
        return data.some(symbol => segments[num]?.includes(symbol || "")) ? '#fff' : '';
    }

    return (
        <g fill={color} stroke="none" strokeWidth="0">

            {(isCenterPosition) && (
                <>
                    <path fill={fillForSegment(25)} d="M251.69174,203.83043v-11.4h10.2v11.4z" stroke="none" strokeWidth="0" />
                    <path fill={fillForSegment(26)} d="M255.39174,215.63043v-10.5h11.5v10.5z" stroke="none" strokeWidth="0" />
                    <path fill={fillForSegment(27)} d="M261.49172,227.73043v-10.2h12.4v10.2z" stroke="#000000" strokeWidth="0" />
                    
                    <path fill={fillForSegment(28)} d="M292.19174,203.83043v-11.4h10.2v11.4z" stroke="none" strokeWidth="0" />
                    <path fill={fillForSegment(29)} d="M287.19174,215.63043v-10.5h11.5v10.5z" stroke="none" strokeWidth="0" />
                    <path fill={fillForSegment(30)} d="M280.39174,227.73043v-10.2h12.4v10.2z" stroke="#000000" strokeWidth="0" />
                </>
            )}


            <path fill={fillForSegment(1)} d={`M${143.05225 + offset},183.22586v-8.47458h11.18644v13.05085h-7.11864z`} />
            <path fill={fillForSegment(2)} d={`M${160.76411 + offset},187.97163v-13.05084h12.20339v13.05084z`} />
            <path fill={fillForSegment(3)} d={`M${177.88276 + offset},187.97163v-13.05084h12.20339v13.05084z`} />
            <path fill={fillForSegment(4)} d={`M${202.9675 + offset},187.80214h-7.11864v-13.05085h11.18644v8.47458z`} />

            <path fill={fillForSegment(5)} d={`M${147.34973 + offset},240.03939l-4.94186,-4.4186l4.94186,-5h6.97674v9.41861z`} />
            <path fill={fillForSegment(6)} d={`M${160.54742 + offset},239.98125v-9.36047h13.60465v9.36047z`} />
            <path fill={fillForSegment(7)} d={`M${177.71428 + offset},239.98125v-9.36047h14.27093v9.36047z`} />
            <path fill={fillForSegment(8)} d={`M${195.60555 + offset},240.03939v-9.41861h6.97674l4.94186,5l-4.94186,4.4186z`} />
            
            <path fill={fillForSegment(9)} d={`M${147.12005 + offset},282.71736h7.11864v13.05085h-11.18644v-8.47458z`} />
            <path fill={fillForSegment(10)} d={`M${172.9675 + offset},282.54787v13.05085h-12.20339v-13.05085z`} />
            <path fill={fillForSegment(11)} d={`M${190.08615 + offset},282.54787v13.05085h-12.20339v-13.05085z`} />
            <path fill={fillForSegment(12)} d={`M${207.03531 + offset},287.29362v8.47458h-11.18644v-13.05085h7.11864z`} />
            
            
            
            <path fill={fillForSegment(13)} d={`M${134.55904 + offset},205.15567v-17.14077h8.72093l4.7093,4.69891v12.44186z`} />
            <path fill={fillForSegment(14)} d={`M${134.67531 + offset},217.01614v-10.40698h13.43023v10.40698z`} />
            <path fill={fillForSegment(15)} d={`M${134.67531 + offset},231.02777v-12.26744h13.43023v7.09302l-5.05814,5.17442z`} />
            
            <path fill={fillForSegment(16)} d={`M${134.55904 + offset},256.78355v-17.14077h8.72093l4.7093,4.69891v12.44186z`} />
            <path fill={fillForSegment(17)} d={`M${134.67531 + offset},268.64396v-10.40698h13.43023v10.40698z`} />
            <path fill={fillForSegment(18)} d={`M${134.67531 + offset},282.65565v-12.26744h13.43023v7.09302l-5.05814,5.17442z`} />
            
            <path fill={fillForSegment(19)} d={`M${202.93114 + offset},205.15567v-12.44186l4.7093,-4.69891h8.72093v17.14077z`} />
            <path fill={fillForSegment(20)} d={`M${202.81485 + offset},217.01614v-10.40698h13.43023v10.40698z`} />
            <path fill={fillForSegment(21)} d={`M${207.87299 + offset},231.02777l-5.05814,-5.17442v-7.09302h13.43023v12.26744z`} />
            
            <path fill={fillForSegment(22)} d={`M${202.93114 + offset},256.78355v-12.44186l4.7093,-4.69891h8.72093v17.14077z`} />
            <path fill={fillForSegment(23)} d={`M${202.81485 + offset},268.64396v-10.40698h13.43023v10.40698z`} />
            <path fill={fillForSegment(24)} d={`M${207.87299 + offset},282.65565l-5.05814,-5.17442v-7.09302h13.43023v12.26744z`} />
        </g>
    );
}