import { MDXProvider } from '@mdx-js/tag'
import { ThemeProvider } from 'styled-components'
import defaultTheme from '../themes'
import defaultComponents from '../components/mdx'
import Root from './root'
import Section from './section'

export default ({
  sections,
  width='100vw',
  height='100vh',
  theme = defaultTheme,
  components: propsComponents,
}) => {
  const {
    components = propsComponents
  } = theme
  const context = {
    sections,
  }
  return (
    <ThemeProvider theme={theme}>
      <MDXProvider
        components={{
          ...defaultComponents,
          ...components
        }}>
          <Root
            sections={sections}
            width={width}
            minHeight={height}>
            {/* <GoogleFonts /> */}
            {sections.map((Component, i) => (
              <Section
                key={i}
                id={'section-' + i}
                {...context}
                index={i}
                className='Section'>
                <Component />
              </Section>

            ))}
          </Root>
      </MDXProvider>
    </ThemeProvider>
  )
}