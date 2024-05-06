import { SetMembershipNotificationPreferencesMutation } from '@/api/queries/__generated__/notifications.generated'
import { NotificationSettingSections } from '@/components/NotificationsTable'

type Name = Exclude<
  keyof SetMembershipNotificationPreferencesMutation['setAccountNotificationPreferences'],
  '__typename'
>

export const TABLE_STRUCTURE: NotificationSettingSections<Name> = [
  {
    title: 'Generic',
    rows: [
      {
        label: 'New channel created',
        name: 'channelCreated',
      },
    ],
  },
  {
    title: 'Engagement',
    rows: [
      {
        label: 'Someone replied to your comment',
        name: 'replyToComment',
      },
      {
        label: 'Someone reacted to your comment',
        name: 'reactionToComment',
      },
    ],
  },
  {
    title: 'Followed channels',
    rows: [
      {
        label: 'Posted a new video',
        name: 'videoPosted',
      },
      {
        label: 'Put a new NFT on auction',
        name: 'newNftOnAuction',
      },
      {
        label: 'Put a new NFT on sale',
        name: 'newNftOnSale',
      },
    ],
  },
  {
    title: 'NFT',
    rows: [
      {
        label: 'Someone placed higher bid than you',
        name: 'higherBidThanYoursMade',
      },
      {
        label: 'You won the auction',
        name: 'auctionWon',
      },
      {
        label: 'You lost the auction',
        name: 'auctionLost',
      },
      {
        label: 'Your bid withdrawal is enabled',
        name: 'openAuctionBidCanBeWithdrawn',
      },
    ],
  },
  {
    title: 'Payouts',
    rows: [
      {
        label: 'You receive funds from council',
        name: 'fundsFromCouncilReceived',
      },
      {
        label: 'You send funds to external wallet',
        name: 'fundsToExternalWalletSent',
      },
      {
        label: 'You receive funds from working group',
        name: 'fundsFromWgReceived',
      },
    ],
  },
  {
    title: 'Creator token',
    rows: [
      {
        label: 'Channel that you follow issued a creator token',
        name: 'crtIssued',
      },
      {
        label: 'Planned revenue share is announced for relevant token',
        name: 'crtRevenueSharePlanned',
      },
      {
        label: 'Revenue share started for relevant token',
        name: 'crtRevenueShareStarted',
      },
      {
        label: 'Revenue share ended for relevant token',
        name: 'crtRevenueShareEnded',
      },
      {
        label: 'New market started for relevant token',
        name: 'crtMarketStarted',
      },
      {
        label: 'New sale started for relevant token',
        name: 'crtSaleStarted',
      },
    ],
  },
]
