FROM amneziavpn/amnezia-wg:latest AS tunnel
HEALTHCHECK CMD /usr/bin/timeout 5s /bin/sh -c "/usr/bin/wg show | /bin/grep -q interface || exit 1" --interval=1m --timeout=5s --retries=3

EXPOSE 3000 51820/udp

CMD ["sleep", "infinity"]