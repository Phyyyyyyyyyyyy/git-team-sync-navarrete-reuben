# Git Team Sync Lab Workflow Documentation

## 1. Team Members
* Navarrete, Reuben Erich G.

## 2. Push Rejections & Non-Fast-Forward Errors
During the lab, `git push` was rejected with a `[rejected - non-fast-forward]` error. 
This occurs because the local branch history lags behind the remote branch on GitHub after commits are pushed from another clone or team member. Git prevents non-fast-forward pushes to avoid accidentally overwriting remote commits.

## 3. Merge vs. Rebase Comparison
* **Git Merge (`git merge`):** Integrates changes by creating a dedicated merge commit. It preserves the complete historical topology and true chronological order of commits across branches, but creates extra merge commits and a non-linear history graph.
* **Git Rebase (`git rebase`):** Reapplies local commits on top of the target branch's tip, creating a linear history. It keeps the commit log clean and easy to follow, but alters commit hashes and rewrites history.