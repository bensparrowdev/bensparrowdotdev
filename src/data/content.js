import brandicons from '@assets/brandicons';
import mobilePrototype from '@assets/images/mobile-prototype.png';
import desktopScreenshot from '@assets/images/desktop-screenshot.png';

export const shopifyData = {
  price_cards: [
    {
      logo: brandicons.shopify,
      timeEst: '4-6',
      title: 'Basic Build',
      list: [
        'Ideal for small, expanding businesses',
        'Fast-track to market',
        'Cost-effective for limited budgets',
      ],
      price: '5,760',
    },
    {
      logo: brandicons.shopify,
      timeEst: '6-8',
      title: 'Custom Build',
      list: [
        'Tailored for established brands seeking unique features',
        'Bespoke design and functionality',
        'Enhanced UX and integration capabilities',
      ],
      price: '8,640',
    },
    {
      logo: brandicons.react,
      timeEst: '8-10',
      title: 'Headless Store',
      list: [
        'Best for brands prioritising scalability and performance',
        'Built with modern technologies  for fast user interfaces',
        'Integrates seamlessly with existing systems/technologies',
      ],
      price: undefined,
    },
  ],
  content_sections: [
    {
      image: mobilePrototype,
      imageAlt: 'mobile prototype of shopify store',
      pretitle: 'conversion optimised',
      title: 'Shopify development that’s optimised for results.',
      body: '<p>Once a design has been established, I will begin crafting a custom, bespoke theme tailored for conversion. As an accredited Shopify expert, I adhere to industry best practices to ensure your store is fully optimised for all devices and browsers, enhancing user experience and boosting your visibility in search engine rankings.</p><p>The result? More visitors, more conversions, and a superior online presence.</p>',
      invert: false,
    },
    {
      image: desktopScreenshot,
      imageAlt: 'mobile prototype of shopify store',
      pretitle: 'long-term growth & support',
      title: 'Sustained Growth Beyond Initial Development.',
      body: '<p>My services extend well beyond initial custom theme development. Following the successful development and launch of your online store, I offer an ongoing optimisation and support retainer. This service promotes sustained growth and flexibility for you as a merchant. This enables you to continuously improve, respond to customer feedback, and enjoy comprehensive support from your personal experienced Shopify expert.</p>',
      invert: true,
    },
  ],
};
