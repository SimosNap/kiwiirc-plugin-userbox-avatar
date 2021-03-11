import UserBoxAvatar from './components/UserBoxAvatar.vue';

// eslint-disable-next-line no-undef
kiwi.plugin('userbox-avatar', (kiwi) => {
    kiwi.replaceModule('components/UserBox', UserBoxAvatar);
});
