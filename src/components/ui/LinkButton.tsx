import { Link } from "react-router-dom";

interface ILinkButton
{
    path: string;
    text: string;
    classname?: string;
}

const LinkButton = ({ path, text, classname }: ILinkButton) => 
{
    return (
        <Link to = {path} className = {classname === undefined ? "" : classname}> {text} </Link>
    );
};


export default LinkButton;