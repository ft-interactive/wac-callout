export default () => ({ // eslint-disable-line

  // link file UUID
  id: 'e90623fe-7db4-11e7-9108-edda0bcbc928',

  // canonical URL of the published page
  // "$url" get filled in by the ./configure script
  url: 'https://ig.ft.com/career-guide-callout',

  // To set an exact publish date do this:
  //       new Date('2016-05-17T17:11:22Z')
  publishedDate: new Date(),

  headline: 'What would you like to know about getting ahead in your career?',

  // summary === standfirst (Summary is what the content API calls it)
  summary: 'Tell editors what the FT\'s career advice guide should cover',

  topic: {
    name: 'Work & Careers',
    url: 'https://www.ft.com/work-careers',
  },

  relatedArticle: {
    text: 'Go to the guide »',
    url: 'https://www.ft.com/content/935ae668-6b00-11e7-bfeb-33fe0c5b7eaa',
  },

  mainImage: {
    title: '',
    description: '',
    credit: '',

    // You can provide a UUID to an image and it was populate everything else
    uuid: '',

    // You can also provide a URL
    // url: 'https://image.webservices.ft.com/v1/images/raw/http%3A%2F%2Fcom.ft.imagepublish.prod.s3.amazonaws.com%2Fc4bf0be4-7c15-11e4-a7b8-00144feabdc0?source=ig&fit=scale-down&width=700',
  },

  // Byline can by a plain string, markdown, or array of authors
  // if array of authors, url is optional
  byline: [
    { name: 'Lilah Raptopoulos', url: 'https://www.ft.com/stream/2e6d3457-c6d2-3d61-8df1-b7c310c432bc' },
    { name: 'Robin Kwong', url: 'https://www.ft.com/stream/3947e926-da60-335e-b41c-7eb6dd2dd26b'},
  ],

  // Appears in the HTML <title>
  title: 'Reader callout for FT career advice guide',

  // meta data
  description: 'A questionnaire for FT readers to suggest topics to cover in the High-flier\'s Guide to Getting Ahead at Work',

  /*
  TODO: Select Twitter card type -
        "summary" or "summary_large_image"

        Twitter card docs:
        https://dev.twitter.com/cards/markup
  */
  twitterCard: 'summary',

  /*
  TODO: Do you want to tweak any of the
        optional social meta data?
  */
  // General social
  // socialImage: '',
  // socialHeadline: '',
  // socialDescription: '',
  // twitterCreator: '@author's_account', // shows up in summary_large_image cards

  // TWEET BUTTON CUSTOM TEXT
  // tweetText: '',
  //
  // Twitter lists these as suggested accounts to follow after a user tweets (do not include @)
  // twitterRelatedAccounts: ['authors_account_here', 'ftdata'],

  // Fill out the Facebook/Twitter metadata sections below if you want to
  // override the "General social" options above

  // TWITTER METADATA (for Twitter cards)
  // twitterImage: '',
  // twitterHeadline: '',
  // twitterDescription: '',

  // FACEBOOK
  // facebookImage: '',
  // facebookHeadline: '',
  // facebookDescription: '',

  // ADVERTISING
  ads: {
    // Ad unit hierarchy makes ads more granular.
    gptSite: 'ft.com',
    // Start with ft.com and /companies /markets /world as appropriate to your story
    gptZone: false,
    // granular targeting is optional and will be specified by the ads team
    dfpTargeting: false,
  },

  tracking: {

    /*

    Microsite Name

    e.g. guffipedia, business-books, baseline.
    Used to query groups of pages, not intended for use with
    one off interactive pages. If you're building a microsite
    consider more custom tracking to allow better analysis.
    Also used for pages that do not have a UUID for whatever reason
    */
    // micrositeName: '',

    /*
    Product name

    This will usually default to "IG"
    however another value may be needed
    */
    // product: '',
  },
});
