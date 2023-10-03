import { gql } from "../__generated__";

export const COMPANY_INFO = gql(/* GraphQL */ `
query companyInfo {
    company {
        ceo
    cto
    employees
    founded
    founder
    headquarters {
      address
      city
      state
    }
  }
  }
  
`);
