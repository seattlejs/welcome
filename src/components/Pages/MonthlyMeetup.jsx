import React from 'react';
import SlideDeck from './SlideDeck';
import { Slide, Heading, FlexBox, Image, Appear, Link, CodeSpan as Code } from 'spectacle';
import FormidableLogo from '../../images/formidable-white.svg';

const MonthlyMeetup = () => {
  return (
    <SlideDeck title='Monthly Meetup'>
      <Slide>
        <FlexBox flexDirection='column' justifyContent='center' alignItems='center' flex='1'>
          <Heading fontSize='200px'>
            Seattle JS
          </Heading>
          <Heading>
            February
          </Heading>
          <Heading>
            Virtual Meetup
          </Heading>
        </FlexBox>
      </Slide>

      <Slide>
        <FlexBox flexDirection='column' justifyContent='center' alignItems='center' flex='1'>
          <Heading fontSize='h2'>
            A Big Thank You To
          </Heading>
          <Heading fontSize='h2'>
            Our Sponsor And Host
          </Heading>
          <Image src={FormidableLogo} />
        </FlexBox>
      </Slide>

      <Slide bgColor="secondary">
        <FlexBox flexDirection='column' justifyContent='center' alignItems='center' flex='1'>
          <Heading >Seattle JS</Heading>
          <Heading >Is Your Meetup</Heading>
        </FlexBox>
      </Slide>


      <Slide bgColor="secondary">
        <FlexBox flexDirection='column' justifyContent='flex-start' alignItems='center' flex='1'>
          <Heading fontSize='h3'>Your meetup needs you!</Heading>
          <Appear
            elementNum={1}
            transitionEffect={{ from: { opacity: 0 }, to: { opacity: 1 } }}
            children={
              <Heading fontSize='h3' paddingY={'0'} marginY={'0'} lineHeight={1}>
                Organizers
              </Heading>
            }
          />
          <Appear
            elementNum={2}
            transitionEffect={{ from: { opacity: 0 }, to: { opacity: 1 } }}
            children={
              <Heading fontSize='h3' lineHeight={1}>
                Speakers
              </Heading>
            }
          />
          <Appear
            elementNum={3}
            transitionEffect={{ from: { opacity: 0 }, to: { opacity: 1 } }}
            children={
              <Heading fontSize='h3' lineHeight={1}>
                Hosts & Sponsors
              </Heading>
            }
          />
          <Appear
            elementNum={4}
            transitionEffect={{ from: { opacity: 0 }, to: { opacity: 1 } }}
            children={
              <Heading fontSize='h3' lineHeight={1}>
                Community
              </Heading>
            }
          />
          <Link fontSize='h3' lineHeight={1} color='primary'>
            SeattleJS.com
          </Link>
          <Appear elementNum={5} />
        </FlexBox>
      </Slide>

      <Slide>
        <FlexBox flexDirection='column' justifyContent='center' alignItems='center' flex='1'>
          <Heading lineHeight={1}>
            Seattle JS
          </Heading>
          <Heading fontSize='h3' lineHeight={1}>
            Follow us on Twitter:
          </Heading>
          <Link color='primary' fontSize='h3' lineHeight={1} textDecoration='none'>@SeattleJS</Link>
          <Heading fontSize='h3' lineHeight={1}>
            Join our Slack:
          </Heading>
          <Link color='primary' fontSize='h3' lineHeight={1} textDecoration='none'>Link in Pinned Tweet</Link>
        </FlexBox>
      </Slide>

      <Slide backgroundColor='primary'>
        <FlexBox flexDirection='column' justifyContent='center' alignItems='center' flex='1'>
          <Heading fontSize='h1'>
            Upcoming Events
          </Heading>
        </FlexBox>
      </Slide>

      <Slide backgroundColor='primary'>
        <FlexBox flexDirection='column' justifyContent='center' alignItems='center' flex='1'>
          <Heading>
            Seattle JS Hackers
          </Heading>
          <Heading fontSize='h2'>
            Virtual Coffee
          </Heading>
          <Heading fontSize='text'>
            Every 2nd Sunday 11:30am to 2:00pm PST
          </Heading>
          <Heading fontSize='text'>
            Next Event: February 14th
          </Heading>
        </FlexBox>
      </Slide>

      <Slide backgroundColor='primary'>
        <FlexBox flexDirection='column' justifyContent='center' alignItems='center' flex='1'>
          <Heading>
            Seattle JS Hackers
          </Heading>
          <Heading fontSize='h2'>
            Code Katas [Virtual]
          </Heading>
          <Heading fontSize='text'>
            Every 3rd Tuesday 5:30pm to 8:00pm PST
          </Heading>
          <Heading fontSize='text'>
            Next Event: February 16th
          </Heading>
        </FlexBox>
      </Slide>

      <Slide>
        <FlexBox flexDirection='column' justifyContent='center' alignItems='center' flex='1'>
          <Heading fontSize='h1'>
            Community Minute
          </Heading>
        </FlexBox>
      </Slide>

      <Slide>
        <FlexBox flexDirection='column' justifyContent='center' alignItems='center' flex='1'>
          <Heading fontSize='200px'>
            TALKS
          </Heading>
        </FlexBox>
      </Slide>

      <Slide>
        <FlexBox flexDirection='column' justifyContent='center' alignItems='center' flex='1'>
          <Heading fontSize='h2'>
            Mike Cataldo
          </Heading>
          <Heading fontSize='text'>
            Making Testing Fun Again with Cypress
          </Heading>
          <Link fontSize='h3' color='secondary' textDecoration='none'>
            @mccataldo
          </Link>
        </FlexBox>
      </Slide>

      <Slide>
        <FlexBox flexDirection='column' justifyContent='center' alignItems='center' flex='1'>
          <Heading fontSize='h1'>
            Intermission
          </Heading>
          <Heading fontSize='h3'>Event will resume shortly</Heading>
        </FlexBox>
      </Slide>

      <Slide>
        <FlexBox flexDirection='column' justifyContent='center' alignItems='center' flex='1'>
          <Heading fontSize='h2'>
            Evan Tahler
          </Heading>
          <Heading fontSize='text'>
            Sharing (Typescript) Types Across the Stack
          </Heading>
          <Link fontSize='h3' color='secondary' textDecoration='none'>
            @evantahler
          </Link>
        </FlexBox>
      </Slide>

      <Slide>
        <FlexBox flexDirection='column' justifyContent='center' alignItems='center' flex='1'>
          <Heading >
            Sponsor ❤
          </Heading>
          <Image src={FormidableLogo} />
        </FlexBox>
      </Slide>

      <Slide>
        <FlexBox flexDirection='column' justifyContent='center' alignItems='center' flex='1'>
          <Heading fontSize='65px'>
            Find these and past Talks on <Code fontSize='65px' color='primary' fontFamily='header'>Youtube</Code>.
          </Heading>
          <Heading fontSize='65px' >
            Search <Code fontSize='65px' color='primary' fontFamily='header'>Seattle JS</Code> to find our Channel
          </Heading>
        </FlexBox>
      </Slide>

      <Slide>
        <FlexBox flexDirection='column' justifyContent='center' alignItems='center' flex='1'>
          <Heading lineHeight={1}>
            Seattle JS
          </Heading>
          <Heading fontSize='h3' lineHeight={1}>
            Follow us on Twitter:
          </Heading>
          <Link color='secondary' fontSize='h3' lineHeight={1} textDecoration='none'>@SeattleJS</Link>
          <Heading fontSize='h3' lineHeight={1}>
            Join our Slack:
          </Heading>
          <Link color='secondary' fontSize='h3' lineHeight={1}>Link in Pinned Tweet</Link>
        </FlexBox>
      </Slide>

      <Slide>
        <FlexBox flexDirection='column' justifyContent='center' alignItems='center' flex='1'>
          <Heading fontSize='h2'>
            Thanks for Joining Us!
          </Heading>
        </FlexBox>
      </Slide>
    </SlideDeck>
  );
}

export default MonthlyMeetup;