const config = {
  development: {
    db: {
      database: 'thesisver2',
      user: 'postgres',
      password: 'xxreallay',
      host: 'localhost',
      port: 5432
    },
    nodemailer: {
    }
  },
  production: {
    db: {
      database: process.env.d1oe598mlghr2k,
      user: process.env.ovmoigrkqlygem,
      password: process.env.d05178ad3051ccc4bce492f7b83dfc1e2a116aea7671cd1c55ddd3a32df68a89,
      host: process.env.ec2-23-21-147-71,
      port: 5432,
      ssl: true
    },
    nodemailer: {

    }
  }
};

module.exports = process.env.NODE_ENV === 'production' ? config.production : config.development;
