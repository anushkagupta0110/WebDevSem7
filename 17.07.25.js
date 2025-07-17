/*
Node.JS Event Emitter
~ to handle events on server side
~ works similar to the event handler
*/

const EventEmitter = require("node:events");
const eventEmitter = new EventEmitter();

eventEmitter.on('start', () => {
    console.log("on emit");
});

eventEmitter.once('once', () => {
    console.log("emitted once");
});

const removeFn = () => {
    console.log("event removed");
};
eventEmitter.on('remove', removeFn);
eventEmitter.removeListener('remove', removeFn);

eventEmitter.on('remove-all', () => {
    console.log("all removed");
});
eventEmitter.removeAllListeners('remove-all');

eventEmitter.emit('start');
eventEmitter.emit('once');
eventEmitter.emit('once');
eventEmitter.emit('remove');
eventEmitter.emit('remove-all');

/*
Inbuilt Modules

DNS
~ domain name system
~ works like phonebook directory
~ used to analyze domain, IP
~ ICMP -> to track if packet is lost or not
*/

const dns = require("dns");

// lookup
dns.lookup('www.google.com', (err, address, family) =>
  console.log('address: %j family: IPv%s', address, family));

// resolve4
dns.resolve4('archive.org', (err, addresses) => {
  if (err) throw err;

  console.log(`addresses: ${JSON.stringify(addresses)}`);

  addresses.forEach((a) => {
    dns.reverse(a, (err, hostnames) => {
      if (err) {
        throw err;
      }
      console.log(`reverse for ${a}: ${JSON.stringify(hostnames)}`);
    });
  });
});
