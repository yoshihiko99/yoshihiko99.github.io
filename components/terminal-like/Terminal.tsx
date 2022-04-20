import React from 'react'
import RenderLines from "@/components/terminal-like/RenderLines";

interface LineProps {
    type: "cmd" | "res";
    text: string;
}

interface Props {
    lines: Array<LineProps>;
    canStart: boolean;
}

const Terminal: React.VFC<Props> = (props) => {
    return (
        <div>
            <RenderLines lines={props.lines} canStart={props.canStart}/>
        </div>
    )
}


export default Terminal
