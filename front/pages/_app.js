import React from 'react'
import 'antd/dist/antd.css'
import PropTypes from 'prop-types'
import Head from 'next/head'

import wrapper from '../ store/configureStore'

const Nodebird = ({ Component }) => {
    return (
        <>
            <Head>
                <meta charSet='utf-8' />
                <title>NodeBird</title>
            </Head>
            <Component />
        </>

    )
}

Nodebird.protoTypes = {
    Component: PropTypes.elementType.isRequired,
}

export default wrapper.withRedux(Nodebird);