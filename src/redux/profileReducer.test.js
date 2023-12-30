import {render, screen} from "@testing-library/react";
import App from "../App";
import profileReducer, {addPostActionCreator} from "./profileReducer";


test("add post should increment posts length", () => {

    let action = addPostActionCreator("new post");

    let state = {
        posts: [
            {message: "Some message", id: 1, likesCount: 22},
            {message: "Second post", id: 2, likesCount: 2},
            {message: "What about Dogs?", id: 3, likesCount: 20},
            {message: "Do you like Dogs?", id: 4, likesCount: 34}
        ]
    }

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(5);
})


test('renders learn react link', () => {
    render(<App/>);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});