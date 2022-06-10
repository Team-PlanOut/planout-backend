const auth_admin = require('firebase-admin');

const serviceAccount = {
  type: 'service_account',
  project_id: 'planout-senior-project',
  private_key_id: '1964e4a52b2ffcc0dace1b5c797fd2842ca85602',
  private_key:
    '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDA+dPyRYwzHEEY\n9E9F0NdMUfMQhzyahzcagNpfctGYFfTdO8atjuk+yZIS/ktm2vOt+tqZTk1LtmjC\n5fsCY5d5ewo9zLpHcfWOATzEW60rQwZS2TWm5/OK7uJ+6G/zfVjghkJjjCubFwxr\n5eEQ9FjvaibJGDyQ0IAicJUvNZcMr24yfyqdfAVdrX1XsZJecrVYlos6b7tP0rX7\n9/dJEBkyOHTi7RkscMoyny7RgjT3/NMl0TdEr+WukHtdUiCGn3eBfpl2wBKNwPYk\n0rbdjZ5LgenBUrNCv6JXx9m4/QsNWIEp2g8fHaO2DXx9FCMnaxts5V3Hl8qEFYFt\nzdTpUKLVAgMBAAECggEAJDsjnHKLUpNE85r3ATwnGAiw0pMZgUfOxDaaCV6k1GGW\n8iyFblONHkE5IEDHRl3ob2tQPIVThNoQDDuip32sVF4R+61i8gQG3u0DjDhMKHmy\nh76JULdu5dBZDQu17SjFFY6Pi2InU7x9lAp6ebTut7Cd7JaU1HmY/R5XHCB7JiG8\nB8XgCkVihTDZsDc0CBQZB61GVv6O4Cypu5qDhPQPjBHHefggB8PRUHS7PNIUibFL\nqGE8ub40I47UVrnEpIcAGwni7aOyJF3td0f2A7umQMn0KMlLmXdGe2pOhpGNYkGZ\nP+SJ5LRuvjdyS0RXsvSpB3GTqOs79N5sFfy9FE/F5wKBgQDzbjzxBuytzEet9w6L\npHhGpwLlr1nz+XOishJAuNdwAY4PAuXS4G5hlnsK6EnTdRYVZ+8DHHB+EZSwvk9w\nffGC473o9oSVdrMmMKji1hzAVgb9K39NRbYf7/ENm0qC/yrDP16aKDQ+jrbPe9nQ\nzombxspaBGxGH+J47O+TCX6SkwKBgQDK8KjMqI7jgOQslZQSjGln98Hljk/hZCzK\nZt0biFrwEkXFjdBT2po0AhjZbTalh2YVbs3yjucpPlx8mYlVHlsTEGlRYMr3mfBy\n8FuGs6d17ua/y/EJvgUsLHcABy8wIBeteC6LNfdQpZeZTDJ9OI1cpuosAAcpjYrN\nPbjxA1lN9wKBgQDQZXpkeSIbc3uV0aAxKd8R1R5k1WYzuEUnbjy0DcnZiGs+LKPl\nkN7OSo4Re2TgUydRsgVq62jedFyPpozJZ/hermtBSfGdJt4dfqDGeLhqa/tVt2wn\nEdvloXsCxAPY+2t3dQOfA3Yea/zSyVtiJ76kjl1jDNBIhDlUfrpmbUVfYwKBgCft\nXWiWqTY9f6b97toPYhWgezeM3k58BQv1XP8zvqCJF80cb6Zv1fLxjq4IfL3oe78v\nw7k7QGOu70dcddaXWFfR3Ma0AnrggJw8ieVgp0vequuFVnESP7ZHMUqCH1ial837\nXTzqazQkwETa5vwYCkf2VxA9GSulu29R+3b/r6xVAoGAW/gj24eqvmcqRXHAlCXX\ndmahppj3XfEI7+AQ8ElXlLQ2g7fkBwRa7RHbukRxG/4AcYVwlC+TowrOiN5UQyTp\nuCNkty/dwXIWZI+j3n7Qi0/+C/tf4qprfkN5PWTFy5DchiSs5WEwhwwioZYCzDY9\nSjR6txO5aFfTmGWSMHbPNo0=\n-----END PRIVATE KEY-----\n',
  client_email:
    'firebase-adminsdk-otukq@planout-senior-project.iam.gserviceaccount.com',
  client_id: '110262304463377673074',
  auth_uri: 'https://accounts.google.com/o/oauth2/auth',
  token_uri: 'https://oauth2.googleapis.com/token',
  auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
  client_x509_cert_url:
    'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-otukq%40planout-senior-project.iam.gserviceaccount.com',
};

auth_admin.initializeApp({
  credential: auth_admin.credential.cert(serviceAccount),
});

module.exports = auth_admin;
