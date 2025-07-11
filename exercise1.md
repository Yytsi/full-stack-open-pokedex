# Discussion

Pylint is the robust and mainstream answer to most Python linting needs. Pytest for convenience and simplicity. Poetry has been great for managing dependencies and setuptools for creating
distributions. We chose GitLab CI/CD because our company prefers it due to privacy concerns.
Travis CI was on our list of consideration, but we thought that GitLab is a more modern choice and comes with other nice features.

The self-hosted versus cloud debate has been tricky for us. Solutions like GitHub Actions were attractive for their immediate setup and maintenance-free operation, but again, privacy concerns had more weight. To put it short, we host everything on our internal infrastructure.

The factors which weighed the most: resource requirements (GPU builds for ML), security requirements (data sensitivity) and build frequency (the amount of parallel jobs?). I suppose if we were a smaller company, it would've made more sense to opt for a cloud solution to reduce operational overhead.

I think the best CI setup you can achieve feels almost invisible; it just works reliably in the background and you don't even necessarily need to know the intricate details of it. It feels satisfying that there is really no limit to how much you can engineer a CI.
