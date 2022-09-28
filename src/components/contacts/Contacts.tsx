import React from 'react';

import { CONTACTS } from './contacts.constants';


export const Contacts: React.FC = () => {
  return (
    <div>

    </div>
  )
}

export const ContactsFooter: React.FC = () => {
  return (
    <div>
      {
        CONTACTS.map((contact, index) => (
          <>
            <div>{contact.name}</div>
            <div>{contact.value}</div>
          </>
        ))
      }
    </div>
  )
}