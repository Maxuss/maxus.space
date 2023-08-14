import {
    Explorer101,
    Nwnp32FolderIcon,
    Nwnp32ServerIcon
} from "@react95/icons";
import {DescriptionContainer, ProjectLanguages, ProjectLinks} from "../Notepad.tsx";
import {useFetchOneshot} from "../../main.tsx";

interface GithubResponse {
    stargazers_count: number
}

export default function ChatGptRs() {
    const githubStars: GithubResponse | undefined = useFetchOneshot("https://api.github.com/repos/Maxuss/chatgpt_rs") as GithubResponse | undefined

    return (<DescriptionContainer>
        <h1>
            ChatGPT-rs
        </h1>
        <ProjectLanguages languages={["rust"]} />
        <ProjectLinks links={[
            { href: "https://github.com/Maxuss/chatgpt_rs", desc: "repository", icon: <Nwnp32ServerIcon variant={"16x16_4"} /> },
            { href: "https://crates.io/crates/chatgpt_rs", desc: "crates.io", icon: <Nwnp32FolderIcon variant={"16x16_4"} /> },
            { href: "https://docs.rs/chatgpt_rs/latest/chatgpt/", desc: "docs.rs", icon: <Explorer101 variant={"16x16_4"} /> },
        ]} />
        <p>
            ChatGPT-rs is an asynchronous Rust wrapper for OpenAI ChatGPT. Its features include conversation support, message persistence
            and even ChatGPT function definition within rust via procedural macros. At the moment of writing this, ChatGPT-rs has just surpassed 6300 total downloads on crates.io
        </p>
        <p>
            {githubStars === undefined ? "At the moment of writing this, ChatGPT-rs had 117 stars on GitHub" : `ChatGPT-rs currently has ${githubStars.stargazers_count} stars on GitHub`}
        </p>
    </DescriptionContainer>)
}