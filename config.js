const config = {
  development: {
    db: {
      database: 'thesisver3',
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
      database: 'd1oe598mlghr2k',
      user: 'ovmoigrkqlygem',
      password: 'd05178ad3051ccc4bce492f7b83dfc1e2a116aea7671cd1c55ddd3a32df68a89',
      host: 'ec2-23-21-147-71.compute-1.amazonaws.com',
      port: 5432,
      ssl: true
    },
    nodemailer: {

    }
  }
};

module.exports = process.env.NODE_ENV === 'production' ? config.production : config.development;
