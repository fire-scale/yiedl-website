import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Welcome to Yiedl.com</h1>
    <p>Park your L1 cryptocurrencies and stable coins here to achieve the highest available rates in DeFi. We find the best farms across multiple chains, stake on your behalf, and report where your funds are spread out at all times for full transparency.</p>
    <p>
      Stop worrying about bridging across chains, auditing contracts, or rotating to new farms for search for higher yields. We handle this for you while you enjoy the gains.
    </p>
    <p>
      Note that APYs update daily. Terms and conditions apply.
    </p>
    <p>
      Stay tuned for the Yiedl coin coming soon.
    </p>
  </Layout>
)

export default IndexPage
