import { ReactNode } from 'react';
import Contacts from '../../Contacts/Contacts.tsx';
import Sponsors from '../../Sponsors/Sponsors.tsx';
import styles from './Information.module.css';
import Heading from '../../../../UI-Kit/Heading/Heading.js';
import { useContext } from 'react';
import { MessagesContext } from '../../../../pages/Anitime/Anitime.tsx';

const Information = ({}) => {
  const messages = useContext(MessagesContext);
  return (
    <div className={styles.information}>
      <section>
        {/* <Group>
          <Deco
            absolute
            big
            t23
            width="17vw"
            left="-1vw"
            top="6%"
            flip
            rotate="90deg"
          />
          <Deco
            absolute
            big
            t21
            width="13vw"
            left="88vw"
            top="20%"
            flip
            rotate="180deg"
          />
          <Deco
            absolute
            big
            t24
            width="13vw"
            left="84vw"
            top="50%"
            flip
            rotate="180deg"
          />
          <Deco
            absolute
            big
            t24
            width="15vw"
            left="4.5vw"
            bottom="-6rem"
            rotate="90deg"
          />
        </Group> */}
        <div className={styles.center} id="anitimeAbout">
          <Heading
            color={undefined}
            fontVariant="amatic"
            className="heading heading__white"
          >
            {messages.aboutFestival.title}
          </Heading>
          <p contentEditable suppressContentEditableWarning>
            {messages.aboutFestival.content}
          </p>
        </div>
      </section>
      <section>
        <div className={styles.center}>
          <Heading
            color={undefined}
            fontVariant="amatic"
            className="heading heading__white"
          >
            {messages.inProgram.title}
          </Heading>
          <p>{messages.inProgram.content}</p>
        </div>
      </section>
      {/* <section>
        <div className={styles.center}>
          <h2>УЧАСТНИКИ МАРКЕТА</h2>
          <MarketGallery />
        </div>
      </section> */}
      <section className={styles.sponsors}>
        <div className={styles.center} id="anitimeSponsors">
          <Heading
            color={undefined}
            fontVariant="amatic"
            className="heading heading__white"
          >
            {messages.ourSponsorsTitle}
          </Heading>
        </div>
        <Sponsors />
      </section>
      <section>
        <div className={styles.center} id="anitimeContacts">
          <Heading
            color={undefined}
            fontVariant="amatic"
            className="heading heading__white"
          >
            {messages.contactsTitle}
          </Heading>
          <Contacts />
        </div>
      </section>
    </div>
  );
};

export default Information;
