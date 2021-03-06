// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import client from './client'
import partner from './partner'
import service from './service'
import team from './team'
import testimonial from './testimonial'
import seo from './seo'
import marketing from './marketing'
import partnerTypes from './partnerTypes'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    client,
    partner,
    service,
    team,
    testimonial,
    seo,
    marketing,
    partnerTypes
  ]),
})
