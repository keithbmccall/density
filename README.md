# Density

## Thoughts
 
Here is a small working application which displays a list of spaces, along with real-time headcount updates. The app is a bit "over-engineered" for the requirements, but I wanted to demonstrate how I would organize such a project with expansion in mind.

Note: the authorization key was gitignored out of the project for security. Please add the key manually before launching the app.
## Assignment

- Render a list of Density spaces, and their current count

The list component can be found in `components/spaces/spaces-list`
- Update the current count of the spaces as entrance / exits occur in real-time

The current count is updated within the `useSpaces` hooks
- Provide a manual pull-to-refresh mechanism to reload the dataset

We're using react-native's built in pull to refresh
- Use redux and a persistent store to cache data for a speedy first-load experience

We use redux-persist to cache the store locally

## Deliverables

- [x] React-Native app (React Native Init)
- [x] Websocket connection for real-time updates
- [x] Persistent store for a speedy first-load experience

## Instructions

To run `yarn` in the project root, then `cd ios && pod install`, then `yarn start`
