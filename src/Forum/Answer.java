package Forum;

public class Answer extends Thread
{
    // Stores number of upvotes
    private int upvotes;
    // Stores number of downvotes
    private int downvotes;
    // Stores the difference (upvotes - downvotes)
    public int diff;
    // Stores the forum it's an answer to
    private Forum forum;

    // Constructor
    public Answer(Forum forum)
    {
        this.forum = forum;
        upvotes = 0;
        downvotes = 0;
        diff = 0;
    }

    public void run()
    {
        // if(user upvotes)
        upvote();
        // if(user downvotes)
        downvote();

        // Re-sort after updating entry
        forum.sort();
    }

    public void upvote()
    {
        // Increase number of upvotes
        upvotes++;
        // Increase the difference
        diff++;
    }
    
    public void downvote()
    {
        // Increase number of downvotes
        downvotes++;
        // Decrease the difference
        diff--;
    }
} 