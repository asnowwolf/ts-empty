import { CommandBuilder } from 'yargs';

export const command = `example <outDir> <urls...>`;

export const describe = '子命令范例';

export const builder: CommandBuilder = {
  outDir: {
    type: 'string',
    description: '输出目录',
  },
  urls: {
    type: 'array',
    description: '源 url，可指定任意多个',
    default: [''],
  },
  params: {
    type: 'array',
    alias: ['p'],
    default: [],
    description: '其它参数，可以同时指定多个',
  },
};

export interface ExampleParams {
  outDir: string;
  urls: string[];
  selectors: string[];
}

export const handler = function (params: ExampleParams) {
  // TODO: 实现命令处理器
};
