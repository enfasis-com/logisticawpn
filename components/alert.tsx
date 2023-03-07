import Container from './container'
import cn from 'classnames'
import { EXAMPLE_PATH } from '../lib/constants'
export default function Alert({ preview }) {
  return (
    <div
      className={cn('border-b', {
        'bg-accent-7 border-accent-7 text-white': preview,
        'bg-accent-1 border-accent-2': !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          {preview ? (
            <>
              Esta es una vista previa de la página.{' '}
              <a
                href="/api/exit-preview"
                className="underline hover:text-cyan duration-200 transition-colors"
              >
               haga clic aquí
              </a>{' '}
              para salir del modo de vista previa.
            </>
          ) : (
            <>
              Esto es un vínculo a {' '}
              <a
                href={`https://enfasis.com`}
                className="underline hover:text-success duration-200 transition-colors"
              >
                Énfasis
              </a>              .
            </>
          )}
        </div>
      </Container>
    </div>
  )
}
