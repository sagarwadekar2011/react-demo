import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [
      {
        id: 1,
        skills: ["Javascript", "Angular", "Typescript"],
        title: "Senior Software Engineer - FE",
        project: "Virsec",
        description:
          "Require highly skilled front end engineer with the above mentioned skillset.",
      },
      {
        id: 2,
        skills: ["Java", "Spring", "Microservices", "MongoDB", "Docker"],
        title: "Senior Software Engineer - BE",
        project: "Virsec",
        description:
          "Require highly skilled backend engineer with the above mentioned skillset.",
      },
      {
        id: 3,
        skills: ["Python", "React", "MongoDB", "Docker"],
        title: "Senior Software Engineer - BE",
        project: "Virsec",
        description:
          "Require highly skilled backend engineer with the above mentioned skillset.",
      },
      {
        id: 4,
        skills: ["Javascript", "React", "Typescript"],
        title: "Senior Software Engineer - FE",
        project: "Virsec",
        description:
          "Require highly skilled frontend engineer with the above mentioned skillset.",
      },
    ],
  },
  reducers: {
    addNewPost(state, action) {
      const { payload } = action;
      payload.id = new Date().toISOString();
      state.posts.push(payload);
    },
    removePost(state, action) {
      const id = action.payload;
      if (id) {
        state.posts = state.posts.filter((post) => post.id !== id);
      }
    },
  },
});

const { actions, reducer } = postSlice;
export default reducer;
export const { addNewPost, removePost } = actions;
