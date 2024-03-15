import type { Schema, Attribute } from '@strapi/strapi';

export interface HomeBanner extends Schema.Component {
  collectionName: 'components_home_banners';
  info: {
    displayName: 'banner';
    description: '';
  };
  attributes: {
    Image: Attribute.Media;
    Banner_text: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'home.banner': HomeBanner;
    }
  }
}
