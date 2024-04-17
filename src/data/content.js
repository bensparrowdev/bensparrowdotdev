import brandicons from '@assets/brandicons';
import mobilePrototype from '@assets/images/mobile-prototype.png';
import desktopScreenshot from '@assets/images/desktop-screenshot.png';

export const shopifyData = {
  price_cards: [
    {
      logo: brandicons.shopify,
      timeEst: 1,
      title: 'Basic Build',
      list: [
        'Ideal for small, expanding businesses',
        'Fast-track to market',
        'Cost-effective for limited budgets',
      ],
      price: '5000',
    },
    {
      logo: brandicons.shopify,
      timeEst: 3,
      title: 'Custom Build',
      list: [
        'Tailored for established brands seeking unique features',
        'Bespoke design and functionality',
        'Enhanced UX and integration capabilities',
      ],
      price: '15,000',
    },
    {
      logo: brandicons.react,
      timeEst: 3,
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
      body: '<p>Once we design your online store, our team of accredited Shopify experts will begin crafting a custom, bespoke theme tailored for conversion. We adhere to industry best practices to ensure your store is fully optimised for all devices and browsers, enhancing user experience and boosting your visibility in search engine rankings.</p><p>The result? More visitors, more conversions, and a superior online presence.</p>',
      invert: false,
    },
    {
      image: desktopScreenshot,
      imageAlt: 'mobile prototype of shopify store',
      pretitle: 'long-term growth & support',
      title: 'Sustained Growth Beyond Initial Development.',
      body: '<p>Our services extend well beyond initial custom theme development. Following the successful development and launch of your online store, we provide an ongoing optimisation and support retainer. This offering promotes sustained growth and flexibility to our merchants. This enables you to continuously improve, respond to customer feedback, and enjoy comprehensive support from our team of experts.</p>',
      invert: true,
    },
  ],
};
