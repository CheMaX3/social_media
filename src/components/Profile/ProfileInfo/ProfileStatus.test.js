import ProfileStatus from "./ProfileStatus";
import {create} from "react-test-renderer";

describe("ProfileStatus component", () => {
    test("Status from props should be in state", () => {
        const component = create(<ProfileStatus status="new status"/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("new status");
    });
});