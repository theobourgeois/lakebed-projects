/** IDE-only stubs. Lakebed resolves these modules at build/runtime. */

declare module "preact" {
  export type ComponentChildren = any;
  export type VNode<P = any> = any;
  export type RefObject<T> = { current: T };
  export type Ref<T> = RefObject<T> | ((value: T | null) => void) | null;
  export function h(...args: any[]): any;
  export function Fragment(props: any): any;
  export type FunctionComponent<P = any> = (props: P) => any;
  export type ComponentType<P = any> = FunctionComponent<P>;
}

declare module "preact/hooks" {
  export function useState<T>(
    initial: T | (() => T)
  ): [T, (value: T | ((prev: T) => T)) => void];
  export function useEffect(
    effect: () => void | (() => void),
    deps?: readonly unknown[]
  ): void;
  export function useLayoutEffect(
    effect: () => void | (() => void),
    deps?: readonly unknown[]
  ): void;
  export function useRef<T = any>(initial?: any): { current: T };
  export function useMemo<T>(factory: () => T, deps: readonly unknown[]): T;
  export function useCallback<T extends (...args: any[]) => any>(
    callback: T,
    deps: readonly unknown[]
  ): T;
  export function useReducer<S, A>(
    reducer: (state: S, action: A) => S,
    initial: S
  ): [S, (action: A) => void];
}

declare module "preact/jsx-runtime" {
  export function Fragment(props: any): any;
  export function jsx(...args: any[]): any;
  export function jsxs(...args: any[]): any;
  export namespace JSX {
    type Element = any;
    type ElementType = any;
    interface IntrinsicElements {
      [elemName: string]: any;
    }
    interface ElementChildrenAttribute {
      children: any;
    }
    interface IntrinsicAttributes {
      key?: any;
    }
  }
}

declare module "lakebed/server" {
  export type Field<T> = {
    kind: string;
    defaultValue?: T;
    default(value: T): Field<T>;
  };
  export type TableDefinition = {
    kind: "table";
    fields: Record<string, Field<any>>;
  };
  export type AuthContext = {
    userId: string;
    displayName: string;
    provider: "guest" | "google";
    isGuest: boolean;
    isAuthenticated: boolean;
    email?: string;
    emailVerified?: boolean;
    picture?: string;
  };
  export type LogContext = {
    info(message: string, data?: unknown): void;
    warn(message: string, data?: unknown): void;
    error(message: string, data?: unknown): void;
  };
  export type QueryBuilder<T> = {
    where(field: keyof T & string, value: unknown): QueryBuilder<T>;
    orderBy(
      field: keyof T & string,
      direction?: "asc" | "desc"
    ): QueryBuilder<T>;
    limit(count: number): QueryBuilder<T>;
    all(): Array<T & { id: string; createdAt: string; updatedAt: string }>;
  };
  export type TableApi<T> = QueryBuilder<T> & {
    get(
      id: string
    ): (T & { id: string; createdAt: string; updatedAt: string }) | null;
    insert(value: T): T & { id: string; createdAt: string; updatedAt: string };
    update(id: string, patch: Partial<T>): void;
    delete(id: string): void;
  };
  export type DbContext = Record<string, TableApi<Record<string, unknown>>>;
  export type ServerContext = {
    auth: AuthContext;
    db: DbContext;
    env: Record<string, string | undefined>;
    log: LogContext;
  };
  export type EndpointRoute = {
    method:
      | "GET"
      | "POST"
      | "PUT"
      | "PATCH"
      | "DELETE"
      | "OPTIONS"
      | "HEAD"
      | (string & {});
    path: `/${string}`;
  };
  export type EndpointHeaders = {
    get(name: string): string | null;
    has(name: string): boolean;
    entries(): IterableIterator<[string, string]>;
  };
  export type EndpointRequest = {
    method: string;
    path: string;
    url: string;
    headers: EndpointHeaders;
    query: URLSearchParams;
    text(): Promise<string>;
    json<T = unknown>(): Promise<T>;
    bytes(): Promise<Uint8Array>;
  };
  export type EndpointResponse = {
    body: string;
    headers: Record<string, string>;
    kind: "response";
    status: number;
  };
  export type EndpointResponseOptions = {
    status?: number;
    headers?: Record<string, string>;
  };
  export type EndpointDefinition<TResult = unknown> = {
    kind: "endpoint";
    method: string;
    path: string;
    handler: (
      ctx: ServerContext,
      req: EndpointRequest
    ) => TResult | Promise<TResult>;
  };
  export function capsule<T>(definition: T): T;
  export function query<TResult>(
    handler: (ctx: ServerContext) => TResult
  ): (ctx: ServerContext) => TResult;
  export function mutation<TArgs extends unknown[], TResult>(
    handler: (ctx: ServerContext, ...args: TArgs) => TResult
  ): (ctx: ServerContext, ...args: TArgs) => TResult;
  export function endpoint<TResult>(
    route: EndpointRoute,
    handler: (
      ctx: ServerContext,
      req: EndpointRequest
    ) => TResult | Promise<TResult>
  ): EndpointDefinition<TResult>;
  export function json(
    value: unknown,
    options?: EndpointResponseOptions
  ): EndpointResponse;
  export function text(
    value: unknown,
    options?: EndpointResponseOptions
  ): EndpointResponse;
  export function empty(options?: EndpointResponseOptions): EndpointResponse;
  export function redirect(
    url: string,
    options?: EndpointResponseOptions
  ): EndpointResponse;
  export function table(fields: Record<string, Field<any>>): TableDefinition;
  export function string(): Field<string>;
  export function boolean(): Field<boolean>;
}

declare module "lakebed/client" {
  export type AuthValue = {
    userId: string;
    displayName: string;
    provider: "guest" | "google";
    isGuest: boolean;
    isAuthenticated: boolean;
    isLoading?: boolean;
    email?: string;
    emailVerified?: boolean;
    picture?: string;
  };

  export function useAuth(): AuthValue;
  export function useQuery<TResult = unknown>(name: string): TResult;
  export function useMutation<
    TArgs extends unknown[] = unknown[],
    TResult = unknown
  >(name: string): (...args: TArgs) => Promise<TResult>;

  export function signInWithGoogle(options?: Record<string, unknown>): Promise<{
    bundle: { challenge: string; state: string; verifier: string };
    url: string;
  }>;
  export function signOut(): void;
  export function getIdentity(): {
    expired?: boolean;
    token?: string;
    userId: string | null;
  };

  export function SignInWithGoogle(props?: any): any;

  export type AppLocation = {
    hash: string;
    href: string;
    pathname: string;
    search: string;
  };
  export function navigate(to: string, options?: { replace?: boolean }): void;
  export function Router(props?: any): any;
  export function Routes(props?: any): any;
  export function Route(props: { path: string; element: any }): any;
  export function Link(props: any): any;
  export function useLocation(): AppLocation;
  export function useNavigate(): typeof navigate;
  export function useParams<
    TParams = Record<string, string | undefined>
  >(): TParams;
}
