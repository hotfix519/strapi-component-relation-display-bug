import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsContentComponent extends Schema.Component {
  collectionName: 'components_components_content_components';
  info: {
    displayName: 'ContentComponent';
    icon: 'alien';
  };
  attributes: {
    base_content: Attribute.Relation<
      'components.content-component',
      'oneToOne',
      'api::base-content.base-content'
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.content-component': ComponentsContentComponent;
    }
  }
}
