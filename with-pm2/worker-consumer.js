const rq = require('amqplib/callback_api');

const workerConsumer = (queueName) => {
  rq.connect('amqp://localhost', (err, conn) => {
    if (err) process.exit();
    conn.createChannel((channelError, channel) => {
      if(channelError) {
        console.log(err);
        process.exit();
      }
      channel.assertQueue(queueName, { durable: false });
      channel.consume(
        queueName,
        (message) => {
          console.log(
            `QueueName: ${queueName} - ${message.content.toString()}`
          );
        },
        { noAck }
      );
    });
  });
}

module.exports = workerConsumer;