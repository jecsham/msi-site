export default function handler(req, res) {
  res.status(200).json({
    url: "https://mycompany.example.com/myapp/releases/myrelease.tar.gz",
    version: "2.0.5",
    notes: "Improvements and bug fixes",
    signature: "dW50cnVzdGVkIGNvbW1lbnQ6IHNpZ25hdHVyZSBmcm9tIHRhdXJpIHNlY3JldCBrZXkKUlVRWWJDNlE3T2NIeVVFZmtMaGcrdVI0Y0l6YUMvT3Ftd2IvdFZWNjFpdHNoNnYwZ0FsVXl1TzMxdUt6SlJYdVFHNng0OFpPb0FSUzVjT2V3bXFHdU1SaGNXVHpKbEU0RVFJPQp0cnVzdGVkIGNvbW1lbnQ6IHRpbWVzdGFtcDoxNjU0NDAxNzYwCWZpbGU6QzpcVXNlcnNcamVjbWVcT25lRHJpdmVcRG9jdW1lbnRzXGdpdGh1Yl9yZXBvc1xtc2lcc3JjLXRhdXJpXHRhcmdldFxyZWxlYXNlXGJ1bmRsZS9tc2kvTXkgU3lzdGVtIEluZm9ybWF0aW9uXzIuMC4wX3g2NF9lbi1VUy5tc2kuemlwCk05b3BSWnJZWkdDbzZiUzZDVkt6OTdhOEY2elNMeTM1eUtieGIzTXpRbEFmMFNsSFU0LzZVN3NDNlg1S1JpZ0JtcWxWeks0bk1TcXBjOWNoVEM5eEJRPT0K",
  });
}
