export default () => (
  <style jsx global>
    {`
      ul,
      .tree-view {
        list-style-type: none;
      }

      .tree-view {
        margin: 0;
        padding: 0;
      }

      .arrow {
        border: solid black;
        border-width: 0 3px 3px 0;
        display: inline-block;
        padding: 3px;
        margin-right: 6px;
      }

      .right {
        transform: rotate(-45deg);
        -webkit-transform: rotate(-45deg);
      }

      .left {
        transform: rotate(135deg);
        -webkit-transform: rotate(135deg);
      }

      .up {
        transform: rotate(-135deg);
        -webkit-transform: rotate(-135deg);
      }

      .down {
        transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
      }

      .parent {
        display: flex;
        align-items: center;
      }

      .nested {
        display: none;
      }

      .parent.active + .nested {
        display: block;
        margin-left:15px;
      }

      .active {
        display:flex;
      }
    `}
  </style>
);
