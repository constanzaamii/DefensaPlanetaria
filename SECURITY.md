# Security Considerations

## Rate Limiting

The favorites API endpoints (`GET /api/favorites`, `POST /api/favorites`, `DELETE /api/favorites/:id`) perform file system operations but are not rate-limited.

**Status**: Known limitation for educational purposes

**Context**: This is an educational project designed to run locally for learning purposes. In a production environment, you should:

1. Add rate limiting middleware (e.g., `express-rate-limit`)
2. Use a proper database instead of JSON files
3. Add authentication and authorization
4. Implement input validation and sanitization

**Recommendation**: If deploying this project publicly, implement rate limiting:

```javascript
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

app.use('/api/favorites', limiter);
```

## Other Security Notes

- This project is intended for local development and educational use
- The backend uses CORS to allow cross-origin requests (appropriate for development)
- No sensitive data is stored or transmitted
- All exoplanet data is public scientific information

## For Production Use

If you plan to deploy this application to production, consider:

1. Add authentication (JWT, OAuth, etc.)
2. Use environment variables for configuration
3. Add HTTPS/SSL
4. Implement proper error handling and logging
5. Use a production database (PostgreSQL, MongoDB, etc.)
6. Add request validation with libraries like `joi` or `express-validator`
7. Implement CSRF protection
8. Add security headers with `helmet`
9. Set up proper rate limiting
10. Regular dependency updates and security audits
