# GITLAB

INSTALL

```
docker pull gitlab/gitlab-ce:latest
```

SETTING DOCKER COMPOSE

The simple configuration of the docker for gitlab

Adding `$GITLAB_HOME` to the bash_profile



```yaml
version: '3.7'
services:
    gitlab-mac:
        image: gitlab/gitlab-ce:latest
        container_name: gitlab-mac-container
        restart: unless-stopped
        volumes:
            - '$GITLAB_HOME/config:/etc/gitlab'
            - '$GITLAB_HOME/logs:/var/log/gitlab'
            - '$GITLAB_HOME/data:/var/opt/gitlab'
        privileged: true
        environment:
            GITLAB_OMNIBUS_CONFIG: |
                external_url 'http://localhost:80'
                # Add any other gitlab.rb configuration below
        ports:
            - '8888:80'
            - '8443:443'
            - '8822:22'
```

or same as 

```bash
docker run --detach \
    --publish 443:443 --publish 8000:80 --publish 22:22 \
    --name gitlab \
    --restart always \
    --volume $GITLAB_HOME/config:/etc/gitlab \
    --volume $GITLAB_HOME/logs:/var/log/gitlab \
    --volume $GITLAB_HOME/data:/var/opt/gitlab \
    gitlab/gitlab-ce:latest
```

## NOTICE:

Restart server each time reconfiguration 

```
gitlab-ctl reconfigure  # 3-5 mins
gitlab-ctl restart      # each time updating ip addr
gitlab-ctl status       # check status
```