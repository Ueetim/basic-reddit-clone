// defines the article class

export class Article {
    title: string;
    link: string;
    votes: number;

    // the ? after 'votes' indicate it is optional. defaults to 0
    constructor(title: string, link: string, votes?: number) {
        this.title = title;
        this.link = link;
        this.votes = votes || 0;
    }

    voteUp(): void {
        this.votes += 1;
    }
    
    voteDown(): void {
        this.votes -= 1;
    }

    // utility func for extracting domain from url
    domain(): string {
        try {
            //e.g http://foo.com/path/to/bar
            const domainAndPath: string = this.link.split('//')[1];

            //e.g foo.com/path/to/bar
            return domainAndPath.split('/')[0];
        } catch (err) {
            return 'null';
        }
    }
}
