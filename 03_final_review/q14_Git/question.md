## Git Question A:

You have committed and pushed a bad change to your git repo.  How can you fix it (give exact command), without destroying history, since others might have pulled your bad change and based their changes on yours?  What would this command do? 

-git revert
is used to record some new commits to reverse the effect of some earlier commits often only a faulty one

<!-- Feedback:

  I was expecting the full command, i.e. git revert <hash or ref>
  However I'll give you this.

 -->


## Git Question B:

How do you delete a local branch after completing work on it.  How would you delete a remote branch?

 git push origin --delete [remote Branch Name]


<!-- Feedback:

Provided answer deletes the remote branch. How about local branch deletion? 

I'll give you 2.25/3.00

-->