import { BodyComponent, DivComponent, PromptMessageComponent } from "./StyledComponents";

function AudioPromptMessage () {

    return (
        <>
            <BodyComponent />
            <DivComponent>
                <PromptMessageComponent>Hello World</PromptMessageComponent>
            </DivComponent>
        </>
    );
}

export default AudioPromptMessage;