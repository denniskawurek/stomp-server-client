FROM rabbitmq:latest
RUN rabbitmq-plugins enable --offline rabbitmq_web_stomp
