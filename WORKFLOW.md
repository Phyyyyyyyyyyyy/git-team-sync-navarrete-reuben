# Git Team Sync Lab Workflow Documentation

## 1. Name:
* Navarrete, Reuben Erich G.

## 2. Reflection Questions

### What did the rejected push error message tell you, and why did it happen?
* **Message:** The terminal displayed `! [rejected - non-fast-forward]` and suggested `(fetch first)`.
* **Reason:** This occurred because the local branch history in the active clone was behind the remote branch on GitHub after new commits had already been pushed from the other clone. Git prevents non-fast-forward pushes to avoid silently overwriting remote commits.

### What's the actual difference between how you resolved Task 3 (merge) vs Task 4 (rebase)?
* **Task 3 (Merge):** Integrated divergent commits by combining both histories into a brand new **merge commit**. This preserved the original non-linear history and branching topology.
* **Task 4 (Rebase):** Moved and reapplied local commits directly on top of the latest commit from `origin/feature/loyalty-points`. This rewrote the local commit history to create a completely linear log without generating an extra merge commit.

### What one habit would have avoided both rejected pushes in this lab?
* **Habit:** Always running **`git pull`** (or `git fetch`) before starting work or attempting to push. Synchronizing with remote changes first ensures your local branch remains up-to-date before making new commits.

### Which approach — merge or rebase — would you default to on a shared team branch, and why?
* **Default Approach:** **`git merge`**.
* **Reasoning:** `git merge` preserves published history without rewriting commit hashes, preventing sync issues for other team members pulling from the shared branch. `git rebase` alters commit history, which should generally be restricted to local personal feature branches before integrating into shared branches.