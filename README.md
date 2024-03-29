# THE MIND GAME

## Branch naming rules

3 types of tasks -> 3 types of branches

`{task type}/{identifier of issue}-{quick title}`

Examples,

- `bugfix/#123-login-header-not-visible`
- `feature/#892-dashboard`
- `update/#384-card-transition-to-modal`

<br><br>

## Core branches

This project has 3 core branches

- `main` (for production)
- `prototype` (for prototype)
- `development` (for development)

<br>

All branches are merged to `developement` branch. <br>
After sprint is finished, `development` branch is merged to `prototype`. <br>
If `prototype` passes all QA tests, it is ready for production and can be merged to `main` branch. <br>

<br><br>

## Merge requests

After work is done, it is pushed to remote repository and merge request is created to `development` branch.
Description of each merge request should be clear and explain what was done.
Each merge request has to be reviewed by another developer if possible, and only merged if approved.
