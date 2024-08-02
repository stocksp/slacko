const data = [
  {
    subtype: 'channel_join',
    user: 'U03R8FLUR',
    text: '<@U03R8FLUR> has joined the channel',
    type: 'message',
    ts: '1722455075.240309'
  },
  {
    subtype: 'channel_leave',
    user: 'U03R8FLUR',
    text: '<@U03R8FLUR> has left the channel',
    type: 'message',
    ts: '1722455051.300579'
  },
  {
    user: 'U03RAH98E',
    type: 'message',
    ts: '1722454834.205149',
    client_msg_id: '0d6144c0-0f41-43bc-8475-87e6547d8ea2',
    text: "Great.  All I'd need to start playing is like a returned data set with all the of todays messages for this channel.   That would give me more than enough data to keep me busy for a while.... write it to a db and the display it....",
    team: 'T03R8FLU3',
    blocks: [ [Object] ]
  },
  {
    user: 'U03R8FLUR',
    type: 'message',
    ts: '1722452967.805139',
    client_msg_id: '67b94276-e497-4dce-b6bf-d9c7d8d0b808',
    text: 'You can see it live in this channel (so long as I am still running my local dev server). Because I am writing the word hello in this message, my slack app should reply to it in a thread.',
    team: 'T03R8FLU3',
    thread_ts: '1722452967.805139',
    reply_count: 1,
    reply_users_count: 1,
    latest_reply: '1722452968.367469',
    reply_users: [ 'U07EHHB2D7Z' ],
    is_locked: false,
    subscribed: false,
    blocks: [ [Object] ]
  },
  {
    subtype: 'channel_join',
    user: 'U07EHHB2D7Z',
    text: '<@U07EHHB2D7Z> has joined the channel',
    inviter: 'U03R8FLUR',
    type: 'message',
    ts: '1722452917.725379'
  },
  {
    user: 'U03R8FLUR',
    type: 'message',
    ts: '1722452191.593469',
    client_msg_id: 'ae482d29-c50d-448c-a3c2-fdda86247f4d',
    text: 'This is the data you get when a message listener receives a new message:\n' +
      '\n' +
      '```{\n' +
      "  user: 'U03R8FLUR',\n" +
      "  type: 'message',\n" +
      "  ts: '1722451432.226549',\n" +
      "  client_msg_id: '1bf4e6b8-b7fb-4dfd-b170-812e193082fc',\n" +
      "  text: 'test message!',\n" +
      "  team: 'T03R8FLU3',\n" +
      "  blocks: [ { type: 'rich_text', block_id: 'fhdWa', elements: [Array] } ],\n" +
      "  channel: 'C07F0R8KPQU',\n" +
      "  event_ts: '1722451432.226549',\n" +
      "  channel_type: 'group'\n" +
      '}```',
    team: 'T03R8FLU3',
    blocks: [ [Object] ]
  },
  {
    user: 'U03R8FLUR',
    type: 'message',
    ts: '1722452086.046669',
    client_msg_id: '87241c87-bde0-4e99-bb54-695147914dc4',
    text: 'Posting a message is just this:\n' +
      '\n' +
      '```const result = await client.chat.postMessage({\n' +
      '    channel: channelId,\n' +
      '    text: "Hello world"\n' +
      '  })```',
    team: 'T03R8FLU3',
    blocks: [ [Object] ]
  },
  {
    user: 'U03R8FLUR',
    type: 'message',
    ts: '1722452015.847039',
    client_msg_id: '824be764-e87b-4f79-a30f-9ff4e09beca5',
    text: 'Getting message history from a channel looks like this:\n' +
      '\n' +
      '```const result = await app.client.conversations.history({\n' +
      '  channel: channelId,\n' +
      '})\n' +
      'conversationHistory = result.messages```',
    team: 'T03R8FLU3',
    blocks: [ [Object] ]
  },
  {
    user: 'U03R8FLUR',
    type: 'message',
    ts: '1722451966.700259',
    client_msg_id: '074944cb-51da-44be-a792-3e8b19adcdef',
    text: 'you can see how easy it would be to wire up these listeners to a database and sync down to a client chat ui component.',
    team: 'T03R8FLU3',
    blocks: [ [Object] ]
  },
  {
    user: 'U03R8FLUR',
    type: 'message',
    ts: '1722451910.028589',
    edited: { user: 'U03R8FLUR', ts: '1722451916.000000' },
    client_msg_id: '4fe1f5f1-64de-45a6-b9df-3a2461a59844',
    text: 'All that it takes for that listener is this:\n' +
      '\n' +
      '```// Listens to incoming messages that contain "hello"\n' +
      'app.message("hello", async ({ message, say }) => {\n' +
      '  // say() sends a message to the channel where the event was triggered\n' +
      '  await say(`Hey there <@${message.user}>!`)\n' +
      '})```',
    team: 'T03R8FLU3',
    blocks: [ [Object] ]
  },
  {
    user: 'U03R8FLUR',
    type: 'message',
    ts: '1722451872.245509',
    client_msg_id: '5ed92ac4-94ae-431a-af72-91d7d2e4dd6b',
    text: 'It\'s actually pretty cool. They make it easy to register event listeners for pretty much anything. The demo app I\'ve been hacking on has an example for automatically responding "hello" to any message in the channel with the word "hello" in it. It works great - extremely fast sync between my local node server and the slack client I have open.',
    team: 'T03R8FLU3',
    blocks: [ [Object] ]
  },
  {
    user: 'U03R8FLUR',
    type: 'message',
    ts: '1722451700.161409',
    client_msg_id: 'f575fbac-95b7-43ab-a96d-2a9ed16323cf',
    text: 'I should be able to get you set up to play with it after another short session or two',
    team: 'T03R8FLU3',
    blocks: [ [Object] ]
  },
  {
    user: 'U03R8FLUR',
    type: 'message',
    ts: '1722451636.882119',
    client_msg_id: '8d0be72d-be7c-4394-9eb9-f8595b44d9c3',
    text: 'took a break to play with the slack api. the node slack sdk and related tools are very helpful but there is just so much to configure (over 200 api methods, 80 different permission scopes, it\'s a beast). However I was able pretty quickly to get a node app running locally that can read a channel history, listen for incoming messages, and post to the channel.',
    team: 'T03R8FLU3',
    blocks: [ [Object] ]
  },
  {
    user: 'U03R8FLUR',
    type: 'message',
    ts: '1722446625.911709',
    client_msg_id: 'A73A7EBB-2630-4546-B4A4-43684393D6F3',
    text: 'Scary ',
    team: 'T03R8FLU3',
    blocks: [ [Object] ]
  },
  {
    user: 'U03R8FLUR',
    type: 'message',
    ts: '1722446540.637959',
    client_msg_id: 'EF578AC1-14DE-4AB2-96DC-B9B4C6474C9A',
    text: 'That\'s like the ai project from a little while back that could pull audio out of an otherwise silent video by analyzing the slight pixel variations in thin materials visible in the footage like a bag of chips or piece of tissue.',
    team: 'T03R8FLU3',
    blocks: [ [Object] ]
  },
  {
    user: 'U03R8FLUR',
    type: 'message',
    ts: '1722446341.905599',
    text: 'Remotely grabbing your what\'s on your monitor by listening to the rf noise put off by the hdmi connection??\n' +
      '<https://www.rtl-sdr.com/deep-tempest-eavesdropping-on-hdmi-via-sdr-and-deep-learning/>',
    team: 'T03R8FLU3',
    blocks: [ [Object] ]
  }
]
export default data