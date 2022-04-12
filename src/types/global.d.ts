/**
 * RC (React Component)
 */
declare namespace RC {
  type WithChildren<Props = object> = React.FC<React.PropsWithChildren<Props>>
  type WithoutChildren<Props = object> = React.FC<Props>
}
