import styled from 'styled-components'

const Section = styled.section([], {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100vw',
  height: '100vh',
})

export default ({ children }) => (
  <Section>{children}</Section>
)